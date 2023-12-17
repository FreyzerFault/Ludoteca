import { useState, useEffect, useRef } from 'react'
import {
  GetCollection,
  GetCollectionDetailed,
  GetCollectionDetailedMock,
  GetCollectionMock,
} from '../services/bgg/bggCollection'
import { ColType, ItemType } from '../services/bgg/bgg'

export function useCollection({
  userName = 'oborus',
  showExpansions = true,
  mock = false,
  colFilter = ColType.Owned,
  detailed = false,
}) {
  const [collection, setCollection] = useState(null)

  const prevCollection = useRef(collection)

  useEffect(() => {
    if (userName.length === 0) return

    const getCollectionFunction = mock
      ? detailed
        ? GetCollectionDetailedMock
        : GetCollectionMock
      : detailed
      ? GetCollectionDetailed
      : GetCollection
    getCollectionFunction({
      username: userName,
      excludeSubtype: showExpansions ? '' : ItemType.Expansion,
      colFilter,
    })
      .then((data) => {
        if (prevCollection.current === data) return

        prevCollection.current = data
        return setCollection(data)
      })
      .catch((e) => console.error(e))
  }, [userName, mock, showExpansions, colFilter, detailed])

  return { collection }
}

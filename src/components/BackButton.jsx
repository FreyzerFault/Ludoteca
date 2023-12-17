// eslint-disable-next-line react/prop-types
export default function BackButton({ backFunc }) {
  return (
    <button className='back-button' onClick={backFunc}>
      <img src='/back.svg' alt='back-icon' />
    </button>
  )
}

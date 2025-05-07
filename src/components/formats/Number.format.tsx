import useAppStore from '@stores/app.store'
const NumberFormat = ({
  number,
  type,
  className
}: {
  number: number
  type: 'SOLESOLUONG' | 'SOLEDONGIA' | 'SOLESOTIEN' | 'SOLETYLE'
  className?: string
}) => {
  const { SoLeHeThong } = useAppStore()

  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: SoLeHeThong[type] ?? 0,
    maximumFractionDigits: SoLeHeThong[type] ?? 0
  }).format(number ?? 0)

  return (
    <b
      className={`${className} ${
        number === 0 ? '!text-gray-300' : number < 0 ? '!text-red-400' : ''
      } cursor-pointer text-right`}
      style={{ whiteSpace: 'pre-wrap' }}>
      {formattedNumber}
    </b>
  )
}

export default NumberFormat

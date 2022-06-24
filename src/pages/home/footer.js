import { ILLA_LOGO } from '@/pages/home/svg'

function renderItem(title, items) {
  return (
    <div className="w-full h-[212px] flex flex-col items-start justify-center px-[16px] rounded-[32px]">
      <div className="text-[16px] text-[#1d2129]">{title}</div>
      <div className="flex flex-col text-[14px]">
        {items?.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  )
}

const waysData = [
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
  {
    title: 'Product',
    items: ['ILLA Builder', 'ILLA cloud', 'ILLA design'],
  },
]

export function Footer() {
  return (
    <div className="flex h-[600px] items-center px-[120px] py-[185px]">
      <div style={{ width: '1208px' }} className="mr-[40px]">
        <ILLA_LOGO />
        <span className="text-[#1d2129] w-full text-[12px]">Creat with ❤️ by ILLA</span>
      </div>
      {waysData.map((item) => renderItem(item.title, item.items))}
    </div>
  )
}
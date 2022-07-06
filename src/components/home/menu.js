import clsx from 'clsx'
import { CloseIcon, ILLA_LOGO, MenuIcon, SelectIconBlack } from '../../img/home/svg'
import { useState, forwardRef } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const Menu = forwardRef(({ menuExpand, closeMenu }, ref) => {
  const [productListExpand, setProductListExpand] = useState(false)
  const [languageListExpand, setLanguageListExpand] = useState(false)

  const { t } = useTranslation('home')
  const router = useRouter()

  return (
    <div
      className={clsx(
        'h-screen w-full bg-white absolute top-0 left-0 px-[20px]  z-50 font-medium text-[16px] bg-white',
        'overflow-x-hidden',
        menuExpand ? 'block' : 'hidden'
      )}
    >
      <div className="justify-between  w-full h-[64px] flex items-end sm:hidden">
        <NextLink href="/">
          <span>
            <ILLA_LOGO />
          </span>
        </NextLink>
        <span
          onClick={() => {
            closeMenu && closeMenu()
          }}
        >
          <CloseIcon />
        </span>
      </div>

      <span
        onClick={() => {
          setProductListExpand(() => !productListExpand)
        }}
        className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f] mt-[40px]"
      >
        {t('nav.product')} <SelectIconBlack />
      </span>
      <div
        style={{ height: productListExpand ? 80 : 0, overflowY: 'hidden' }}
        className="transition-height duration-200"
      >
        <NextLink href="https://github.com/illa-family/illa-builder">
          <span className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f] pl-[32px]">
            ILLA builder
          </span>
        </NextLink>
        <NextLink href="https://github.com/illa-family/illa-design">
          <span className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f] pl-[32px]">
            ILLA Design
          </span>
        </NextLink>
      </div>
      <NextLink href="/docs/installation">
        <span className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f]">
          {t('nav.doc')}
        </span>
      </NextLink>
      <NextLink href="/hire">
        <span className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f]">
          {t('nav.career')}
        </span>
      </NextLink>

      <span
        onClick={() => {
          setLanguageListExpand(() => !languageListExpand)
        }}
        className="w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f] "
      >
        {router.locale === 'en' ? 'English' : '简体中文'} <SelectIconBlack />
      </span>
      <div>
        <NextLink href={router.pathname} locale={router.locale === 'en' ? 'ch' : 'en'}>
          <span
            style={{ height: languageListExpand ? 40 : 0, overflowY: 'hidden' }}
            className="transition-height duration-200 w-full flex flex-row flex-nowrap items-center h-[40px] gap-[8px] text-[#0b0c0f] pl-[32px]"
            onClick={() => {}}
          >
            {router.locale === 'en' ? '简体中文' : 'English'}
          </span>
        </NextLink>
      </div>
    </div>
  )
})
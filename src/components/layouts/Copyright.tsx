import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  {
    type: 'github',
    color: 'inherit',
    icon: 'i-mdi-github',
    label: 'GitHub: MaRuifu',
    href: 'https://github.com/MaRuifu',
  },
  {
    type: 'telegram',
    color: '#1da1f2',
    icon: 'i-mdi-telegram',
    label: 'Telegram Channel',
    href: 'https://t.me/ITXiaoMage',
  },
  {
    type: 'weibo',
    color: '#DB2828',
    icon: 'i-mdi-sina-weibo',
    label: '微博：IT马瑞富',
    href: 'https://weibo.com/maruifu',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
    icon: 'i-mdi-twitter',
    label: 'Twitter Channel',
    href: 'https://twitter.com/ITXiaoMagege',
  },
  {
    type: 'wechat',
    color: '#1AAD19',
    icon: 'i-mdi-wechat',
    label: '微信公众号：天天IT',
    href: 'https://nas.mrf.ink:10001/images/2024/09/20/IT.png',
  },
  {
    type: 'blog',
    color: '#6435C9',
    icon: 'i-mdi-earth',
    label: '博客：小马哥的故事',
    href: 'http://maruifu.com',
  },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href={pkg.repository.url} target="_blank" rel="noreferrer">
           Air Conditioner
        </a>
        <a
          className="inline-flex"
          href="https://maruifu.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0078e7' }}
        >
          <div className="i-mdi-cloud text-sm mx-1" />
        </a>
        <a href={pkg.author.url} target="_blank" rel="noreferrer">
          小马哥
        </a>
      </div>
      <p>
        {`2019 - ${new Date().getFullYear()}`}
      </p>
      <div className="text-center">
        {socialList.map(item => (
          <Tooltip title={item.label} arrow key={item.type}>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <div className={`${item.icon} text-lg`} />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Copyright

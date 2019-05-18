import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1558080820922'); /* IE9 */
  src: url('iconfont.eot?t=1558080820922#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVwAAsAAAAACtQAAAUhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqJAIcrATYCJAMUCwwABCAFhG0HQxsqCVGUTk6W7IckydEqlJBBGwEAJMEZdYXaAQfAFUQAyP+ay/cXcptNiVAd6hIrICGrenVIClioetLX8WgzVUQq85+bfsRCXVJzSagYSwOjQFNk4snmsHkSXnev2U4uQgCMy/sfoLwKMC1ubQlAUiPaVhIcOlSXfHDMdFG4geXZbKBTiGqKCN1sYJGgA4so3H/TC/zjAz22kPwDPMMEnDgMBNAyROK0tFU2AjHBkRJmjA4p5UBc0hE9JKKURsvC0EBgD2FUcJ6FALAavz39Iz6gAEaGwJnY1l/UDXK/rK8CHnRIdIUI8NezAJCWARxQBkAADbfaRvFSSVks023xfE0AlNuNgR32lWEXOA7jLMG5BBVN4z88hhNA4XBkYajwcEiAbfla0JXkowbMlGcgAzjYBYInRSbD4RpQA9AkQFeMzduaU6K4JiWFRgmtrUiuKJzCyHQx4W1hUUo4sp8U8jPyEdP17HdKduCG+VrWG9m492rLxdXQRxIZuWa+EfFB1Y9ebx7LVGAmF5RlXVstzgjDODXRKNLqXYImWIacy5h+JxSJsbAu5Szt1GhyYV1lFibR0E2y1QWlRkvI4jQZIpPbLFCutsdkJ7R3beWdblDXr5uuXm3We5eSrq74nl1OPr9ofLT5CnXZdFGu9/aZD1D7TXsxKDixy7xniprcbdo53iqyiv5dGmiSMVssnMCWEy2zWaABIxlpwqLFlXfCdkm7oZTozOgOiKx839LLuqw2GdoYpcZChiyuFAtt0E7Ju+l7WYakmwPOTD8AyThDnfqk4Vjp/URiR0hhZe2l9paCRKzyZAX2hML2kKS7zZW+Zy8MZ+aejSWIyk40wxdw+0WNNpG1CQmYXMbNGs+MS4h9HisxEJl+BXiTgcqy9vgH2zviiUyy+NfSy++pFxuXrnJsT1Al12BThq9lCfe8qNnU0pXFP4LrOt1aw01s4osZ4XY+kZkv9anyYe4Cb6gydkeFyIxdEa04gl8nt4lymwpDqjxisK+WWBhc1S/I59tK2Lx8PnxvEyY9KBmD5lB3P+NAHTfU+tj61Ho77K5zKUQikMJINJwKFtERZVZObQ/h7ERSIxKONEbSC4CXS2ulC3YnWk21ueXJ/jOe4WuiVdGaMCdiUTgrXKQqM3JnUtdnLU5pKhRp138ilOgrf+OqtjqyjUufSB5Xzm87apcx6svpGPiyQtIvCTt3vep5uhLDrBOO1jRikuaorPLylMBkzmIPq8t0ZLQafIguMB8A4Pzns8EbAHg2uwFwpvgbHwIAfs/aPuCDcDST1NNpW/OtYt7cljuxUxc7nSmB8bxPKd/gf5wNYZ1fB6EpdPQyVBf5vFFSSpx2ZKCDwadX+DGOAjHur6OIH50OECU+B8YlHTglDymwZSBZ6sCguEErVbLcEkuPh0JNACVWAZAoU8BEuAQuyjmkwN4DKcE7MEQFOGg9gZQNLQWBqejmaVxuxLvh7gXwEEb0KjyjEUoy63HlHI1cXxTGZBTXG1QeuDCvoBopwXtx/RpTZuYq42eNCrhfT2jhNjgO12gIeFJP9OCYMXrQaOxLz8/vb7uj6B5CCyB+ejg5I1w32CwLwFQwhF6KsLIRVHv9ejilOTTk9D0FDWYUTs9A1TksTrTYEcgSWe+ogseSbzCXUjwj+RVgCimdoAUrJgtO4wYJsL72fj1wGKNos2f4+6SLoVKKsbLo/RXax5j/fyrq9JYBRpwESTIgr3x+VHB4SDQzqepVA9zGRgAAAAAA') format('woff2'),
  url('iconfont.woff?t=1558080820922') format('woff'),
  url('iconfont.ttf?t=1558080820922') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1558080820922#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconicon-:before {
  content: "\e60b";
}

.iconbi:before {
  content: "\e60c";
}

.iconspinner:before {
  content: "\e61e";
}

.iconAA:before {
  content: "\e626";
}
`

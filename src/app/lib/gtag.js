export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== ''

// PVを測定する
export const pageview = (path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

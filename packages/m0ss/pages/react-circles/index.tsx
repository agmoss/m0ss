import dynamic from 'next/dynamic'

const ReactCircles = dynamic(() => import('../../src/pages/ReactCircles'), {
  ssr: false
})

export default ReactCircles;

"use client"  // 必须加在文件顶部

import React, { useEffect, useRef } from 'react'
import { Live2DModel } from 'pixi-live2d-display'

export const Live2D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let model
    if (canvasRef.current) {
      Live2DModel.from('https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json')
        .then((live2DModel) => {
          model = live2DModel
          model.scale.set(0.5, 0.5)  // 设置大小为中等
          model.position.set(canvasRef.current.clientWidth / 2, canvasRef.current.clientHeight / 2)  // 居中显示
          canvasRef.current.appendChild(model.view)
        })
    }

    return () => {
      if (model) {
        model.destroy()  // 卸载组件时销毁模型
      }
    }
  }, [])

  return <div ref={canvasRef} style={{ width: '400px', height: '600px' }} />
}

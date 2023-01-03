import React, { useRef, useEffect } from 'react'


function Canvas(props) {

    const canvasRef = useRef(null)


    console.log(props.background)
    const draw = (ctx, frameCount) => {
        ctx.clearRect(100, 100, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = props.background
        ctx.beginPath()
        ctx.arc(100, 100, 70, 0, 2 * Math.PI);
        ctx.fill()
    }


    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 100
        let animationFrameId

        //Our draw came here
        const render = () => {
            
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return <canvas ref={canvasRef}  height="180" {...props} />
}

export default Canvas

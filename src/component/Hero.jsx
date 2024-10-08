import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function Hero() {
    const shoe = useGLTF('./nike/scene.gltf')
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className='flex flex-col justify-center h-[545px] mt-[46px] px-4 lg:px-10'>
            <div className='mt-[20px]'>
                <h1 className='text-[40px] sm:text-[50px] lg:text-[60px] font-bold cursor-pointer'>WE SERVE EPIC</h1>
                <p className='text-[16px] sm:text-[18px] lg:text-[20px] mt-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis porro est laborum inventore consectetur accusantium voluptates magnam possimus. Dignissimos dicta officia earum autem optio! Mollitia eos explicabo neque optio vitae.
                </p>
                <button className='text-white bg-orange-600 p-2 rounded-2xl mt-4'>
                    Buy Now <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
        <div className='h-[545px] w-full'>
            <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>  
                <Suspense fallback={<div>Loading...</div>}>
                    <ambientLight intensity={2.05} />
                    <directionalLight position={[0, 0, 0.05]} />                    
                    <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                    <primitive object={shoe.scene} scale={3.0} position-y={0} rotation-y={0} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    </div>
    
    )
}
export default Hero
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function Hero() {
    const shoe = useGLTF('./nike/scene.gltf')
    return (
        <div class="grid grid-cols-2">
            <div className='w-100% h-[545px] mt-[46px]'>
                <div className='mt-[150px] px-[50px]'>
                    <h1 className='text-[60px] font-bold cursor-pointer flex'>WE SERVE EPIC</h1>
                    <p className='text-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis porro est laborum inventore consectetur accusantium voluptates magnam possimus. Dignissimos dicta officia earum autem optio! Mollitia eos explicabo neque optio vitae.</p>
                    <button className='text-white bg-orange-600 p-2 rounded-2xl mt-[7px]'>Buy Now<i class="fa-solid fa-angles-right"></i></button>
                </div>
            </div>
            <div className='w-100% h-[545px] '>
                <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }} camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}>  
                        <ambientLight intensity={2.05} />
                        <directionalLight position={[0, 0, 0.05]} />                    <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                        <primitive object={shoe.scene} scale={3.0} position-y={0} rotation-y={0} />

                </Canvas>
            </div>
        </div>
    )
}

export default Hero
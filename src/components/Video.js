import React from 'react';

function Video() {


    const myVid = ["./Mostar1x1.mp4","./Belgrad1x1.mp4","./Minca1x1.mp4","./Tayrona1x1.mp4"];

    function choosePic() {
        const randomNum = Math.floor(Math.random() * myVid.length);
        document.getElementById("myVideos").src = myVid[randomNum];
    };

    setTimeout(function(){
        const textanzeige = document.querySelector('herotext2');
        textanzeige?.classList.remove('hidden');
    },1000);


  /*  const hidevideo = document.querySelector('.videosection');

    function isIOSDevice(){
        return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    }

    if(isIOSDevice()){
        console.log("I am an IOS device and can't show the video!");
        hidevideo?.classList.add('hidden');
    }

*/

    window.onload = choosePic;


    return (
        <section className="videosection -mb-4">
            <div>
                <h2 id="videotitle" className="herotext2 hidden text-center hero text-white absolute italic p-28 text-xs mt-60 ">If you don't like the video.<br/> Please refresh the Site.</h2>

            <div id="video"
                 className="bg-emerald-900 mx-auto hidden md:block 4k:hidden items-center content-center self-center w-full items-center justify-center object-center">
                <video autoPlay={true} muted loop>
                    <source src="./Mostar4K.mp4" type="video/mp4"/>
                </video>
            </div>
            <div
                className="mx-auto overflow-hidden md:hidden items-center content-top self-center w-full h-full ">


                <video id="myVideos" muted autoPlay loop src="./Belgrad1x1.mp4"></video>

            </div>

            </div>
            <svg className="hidden absolute" height="60px"  width="100%" viewBox="0 0 500 80" preserveAspectRatio="none">
                <path d="M0,0 L0,40 Q250,40 200,40 L500,0 Z" fill="white" />
            </svg>

        </section>
    );
}

export default Video;

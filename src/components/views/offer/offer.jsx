
import './styles.css'
export default function OfferComponent() {
    return (
<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
<h1 class=" text-1.5xl font-bold font-sans text-center  mb-9 text-gray-800 capitalize lg:text-3xl dark:text-white"><span class="text-blue-500">SPECIAL OFFER</span></h1>
<div class=" all -m-1 flex flex-wrap md:-m-2">
  <div class="flex flex-col w-1/3 flex-wrap">
    <div class="mb-7 w-full p-1 md:p-2">
      <img
        alt="gallery"
        class="img1 block h-full w-full md:w-auto mb-7 rounded-br-3xl object-cover object-center"
        src="https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268__340.jpg" />
    </div> 
     <div class="text-center"> 
        <span class="turkey mr-10">Turkey</span>
        <span class="dollar">$200</span>
     </div>
  </div>
  <div class="item2 flex flex-col w-1/3 flex-wrap" >
    <div class="w-full mb-7  p-1 md:p-2">
      <img
        alt="gallery"
        class="img2 block h-full w-full md:w-auto mb-7 rounded-xl object-cover object-center"
        src="https://c4.wallpaperflare.com/wallpaper/383/118/366/sunrise-palms-sea-beautiful-nature-landscape-water-sky-clouds-scene-waves-beach-sunset-1920%C3%971200-wallpaper-preview.jpg" />
    </div> 
     <div class="text-center"> 
        <span class="turkey mr-10">Turkey</span>
        <span class="dollar">$200</span>
     </div>
     <p class="see w-auto text-1.5xl font-bold font-sans text-center mt-9 capitalize lg:text-3xl dark:text-white bg-green-500 rounded-full border-2 border-red-500"> See All Packages</p>

  </div>
  <div class="flex flex-col w-1/3 flex-wrap">
    <div class="w-full p-1 mb-7 md:p-2">
      <img
        alt="gallery"
        class="img3 block h-full w-full md:w-auto mb-7 rounded-bl-3xl object-cover object-center"
        src="https://lp-cms-production.imgix.net/2019-06/c2af3eb20b44c86b0420b6d698107b21-tis-abay.jpg" />
    </div> 
     <div class="text-center"> 
        <span class="turkey mr-10">Turkey</span>
        <span class="dollar">$200</span>
     </div>
  </div>
</div>
</div>


    );
  }
  
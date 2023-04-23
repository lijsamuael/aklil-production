import React from 'react';
import './styles.css';
export default class ContactComponent extends React.Component { 
   myStyle = {
    backgroundColor: '' 
  };
  textStyle={
    color:"white"
  }
  padding={
    padding:'30'
  }
 
render() {
    return (
<div  class="bg-gray-dark3">
<section  id="contact" class=" text-gray-600 body-font relative">
  <div class="container px-5 py-5 mx-auto">
    <div style={this.textStyle} class="flex flex-col text-center w-full mb-12">
      <h1 class="contact sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-left">If you have any questions, inquiries, or feedback, please do not hesitate to get in touch with us. Our knowledgeable and friendly team is ready to assist you in any way possible.</p>
    </div>
  </div>
</section>
<div style={this.myStyle} class="flex flex-wrap justify-center bg-beige p-4 gap-4">
  <div class="w-full md:w-1/4 lg:w-1/4">
    <div class="flex items-center  rounded-md p-4">
      <div class="icon bg-white rounded-full p-3 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" fill="currentColor" />
        </svg>
      </div>
      <div>
        <h3 class="text-white font-bold">Address</h3>
        <p class="text-white">Kera Gofa Gabriel,
          Mauritus  Street.
          Addis Ababa, 
          ETHIOPIA</p>
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/4 lg:w-1/4">
    
    <div class="flex items-center rounded-md p-4">
      <div class="icon bg-white rounded-full p-3 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 15.5v-3a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-2.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1V9a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h1.5"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7.5a3.5 3.5 0 0 0-3.5 3.5v1"/>
        </svg>
           
      </div>
      <div>
        <h3 class="text-white font-bold">Call Us</h3>
        <p class="text-white">+251-114-70 45 74/75</p>
      </div>
    </div>
 </div>
  <div class="w-full md:w-1/4 lg:w-1/4">
    <div class="flex items-center  rounded-md p-4">
      <div class="icon bg-white rounded-full p-3 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 9L12 15L4 9"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 9v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
        </svg>        
      </div>
      <div>
        <h3 class="text-white font-bold">Email Us</h3>
        <p class="text-white">saduraplckt@gmail.com</p>
      </div>
    </div>
  </div>
</div>
<section className="relative text-gray-600 body-font">
  <div className="container flex flex-wrap mx-auto lg:py-24 lg:px-5 sm:flex-nowrap">
    <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg sm:w-full m:mr-10">
      <div style={{position: 'relative', width: '100vw', height: 'auto', paddingBottom: '56.25%' }} >
        <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className="w-full h-full h-60 sm:h-96 dark:bg-gray-500" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36459.65845463146!2d38.748312871675154!3d9.031875451839642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f69f9c910bb%3A0xf3b5e05243ab160f!2sPiassa!5e0!3m2!1sen!2snl!4v1682193901976!5m2!1sen!2snl"></iframe>
      </div>
    </div>
  </div>
</section>

<div  className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto text-white rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Send Us Message!</h2>
			<div className="dark:text-gray-400">Have a specific question about our product or service? Send us a message and we'll get back to you as soon as possible!</div>
		</div>
		<img src='/images/send.png' alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
		</div>
   
 
<button type="submit" 
  className="w-full p-3 text-sm font-bold tracking-wide text-yellow-500 uppercase bg-yellow-400 border-2 border-yellow-500 rounded send dark:bg-violet-400 dark:text-gray-900 hover:bg-yellow-500"
>
  Send Message
</button>

	</form>
</div>


</div>

)}}

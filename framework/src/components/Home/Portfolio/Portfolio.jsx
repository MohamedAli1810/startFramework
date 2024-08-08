import React, { useState } from 'react';
import photo1 from '/Users/mohamedali/Desktop/forntend/route/startFramework/framework/src/components/image/imgae1.png';
import photo2 from '/Users/mohamedali/Desktop/forntend/route/startFramework/framework/src/components/image/imgae2.png';
import photo3 from '/Users/mohamedali/Desktop/forntend/route/startFramework/framework/src/components/image/imgae3.png';
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  const photos = [photo1, photo2, photo3, photo1, photo2, photo3];
  return <>
      <div className="min-h-screen flex flex-col items-center py-24">
        <div className="pb-5">
          <h2 className="font-bold uppercase text-5xl">Portfolio Component</h2>
        </div>
        <div className="flex items-center gap-x-7 pb-5">
          <div className="line2"></div>
          <div><i className="fa fa-star"></i></div>
          <div className="line2"></div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {photos.map((photo, index) => (
            <div key={index} className="p-12">
              <div className="group relative">
                <img
                  src={photo}
                  className="rounded-xl"
                  alt={`Portfolio item ${index + 1}`}
                  onClick={() => openModal(photo)}
                />                
                <div className="flex justify-center items-center absolute top-0 start-0 end-0 rounded-xl bottom-0 group-hover:bg-green-600 hover:cursor-pointer opacity-80 duration-500">
                  <i className="fa fa-plus opacity-0 group-hover:opacity-100 duration-700 text-5xl text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img src={selectedImage} className="max-w-full max-h-full rounded-xl" alt="Selected" />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation(); // Prevents the modal from closing when clicking the button
              closeModal();
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
}



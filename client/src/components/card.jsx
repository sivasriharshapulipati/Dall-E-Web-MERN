import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="relative rounded-xl group shadow-card hover:shadow-cardhover card">
    <img
      className="object-cover w-full h-auto rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="overflow-y-auto text-sm text-white prompt">{prompt}</p>

      <div className="flex items-center justify-between gap-2 mt-5">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center object-cover text-xs font-bold text-white bg-green-700 rounded-full w-7 h-7">{name[0]}</div>
          <p className="text-sm text-white">{name}</p>
        </div>
        <button type="button" onClick={() => downloadImage(_id, photo)} className="bg-transparent border-none outline-none">
          <img src={download} alt="download" className="object-contain w-6 h-6 invert" />
        </button>
      </div>
    </div>
  </div>
);

export default Card;
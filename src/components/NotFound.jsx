import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightDesert p-4">
      <div className="max-w-lg w-full p-8 rounded-lg shadow-lg bg-white border-t-8 border-goldDesert">
        <h1 className="text-6xl font-bold text-darkDesert mb-4 sm:text-5xl">
          Page 404
        </h1>
        <h2 className="text-2xl text-tealDesert mb-4 sm:text-xl">
          Oups... Cette page n'existe pas !
        </h2>
        <p className="text-darkDesert sm:text-sm">
          Pour retourner sur Accueil, cliquez ici :  
          <Link to="/" className="text-goldDesert ml-1 mr-1 hover:underline">
            Accueil
          </Link>
        </p>
      </div>
    </div>
  );
}

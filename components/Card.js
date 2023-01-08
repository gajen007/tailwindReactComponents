import React from "react"

export default function Card() {
    return (<div>
        <br/>
        <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg max-w-sm text-center border-tw-purple border-t border-b border-r border-l">
          <div className="py-3 px-6 rounded-t bg-tw-purple text-tw-white">
            Featured
          </div>
          <div className="p-6">
            <h5 className="text-tw-purple text-xl font-medium mb-2">Card Title</h5>
            <p className="text-tw-purple text-base mb-4">
              Card content
            </p>
            <button type="button" className="
            inline-block
            px-6
            py-2.5
            bg-tw-purple
            text-tw-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700
            hover:shadow-lg
            focus:bg-blue-700
            focus:shadow-lg
            focus:outline-none
            focus:ring-0
            active:bg-blue-800
            active:shadow-lg
            transition
            duration-150
            ease-in-out
            ">Button</button>
          </div>
          <div className="py-3 px-6 border-t border-tw-purple text-tw-purple">
            Footer
          </div>
        </div>
      </div>
    </div>
        )
}
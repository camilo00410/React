import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        
        <NotesAppBar />

        <div className='notes__content'>

            <input 
                type="text"
                placeholder="Some awesome title"
                className='notes__title-input'
                autoComplete='off'
            />

            <textarea
                placeholder='What happened today'
                className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
                <img 
                    src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="imagen"
                />
            </div>
        </div>

    </div>
  )
}

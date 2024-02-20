import React from 'react'

const Example = () => {
    const inputRef=React.useRef('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(inputRef.current.value);

    }
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <input type="submit" value='submit' />
        </form>
    </div>
  )
}

export default Example;
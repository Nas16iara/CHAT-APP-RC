const GenderCheckBox = ({onCheckBoxChange, selectedGeneder}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGeneder === 'male' ? "selected" : ""}`} >
                <span className='label-text text-pink-200'>Male</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                checked={selectedGeneder === 'male'}
                onChange={() => onCheckBoxChange("male")}
                />
             </label>
        </div>
        <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGeneder === 'female' ? "selected" : ""}`}>
                <span className='label-text text-pink-200'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                checked={selectedGeneder === 'female'}
                onChange={() => onCheckBoxChange("female")}
                />
             </label>
        </div>
    </div>
  )
}

export default GenderCheckBox;

/* const GenderCheckBox = () => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-pink-200'>Male</span>
                <input type='checkbox' className='checkbox border-slate-900' />
             </label>
        </div>
        <div className="form-control">
        <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-pink-200'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900' />
             </label>
        </div>
    </div>
  )
}

export default GenderCheckBox; */
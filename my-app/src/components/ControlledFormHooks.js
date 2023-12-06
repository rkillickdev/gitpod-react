import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }
    return (
        <div>
            <h2>Please fill in the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name} 
                        id='id-name' name='name' 
                        type='text' 
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select 
                    id='id-category' 
                    name='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Enquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default ControlledFormHooks
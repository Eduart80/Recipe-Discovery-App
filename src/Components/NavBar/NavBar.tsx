
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?query=${encodeURIComponent(search.trim())}`);
            setSearch('');
        }
    };

    return (
    <>
    <nav>
        <ul id='nav' style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'lightgreen' })} to={'/'}>Home</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'lightgreen' })} to={'/category'}>Category</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'lightgreen' })} to={'/recipe'}>Recipe</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'lightgreen' })} to={'/favorites'}>Favorites</NavLink></li>
            <li>
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button type="submit" style={{ 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '4px', 
                        border: 'none', 
                        background: 'green', 
                        color: 'white' }}>Search</button>
                </form>
            </li>
        </ul>
    </nav>
    </>
    );
}

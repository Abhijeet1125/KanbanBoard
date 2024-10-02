import React, { useEffect, useState } from 'react';
import './Dropdown.css';
import { useDispatch } from 'react-redux';
import { put_groupBy, put_sortBy } from '../store/dataSlice';

const Dropdown = () => {

  const distpatch = useDispatch()

  return (
    <div className="dropdown">
      <button className="dropdown-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Display
      </button>
      <div className="dropdown-content">
        <div className="dropdown-section">
          <label htmlFor="grouping">Grouping</label>
          <select id="grouping" onChange={(e) => distpatch( put_groupBy ((e.target.value)))}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown-section">
          <label htmlFor="ordering">Ordering</label>
          <select id="ordering" onChange={(e) => distpatch( put_sortBy ((e.target.value)))} >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

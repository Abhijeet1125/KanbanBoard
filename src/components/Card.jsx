import React from 'react';
import './Card.css';

const Card = ({ data }) => {  
  const { id, title, tag, user } = data;

  // Extract the initials from the user's name
  const initials = user.name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');

  return (
    <div className="card">
      {/* ID */}
      <div className="card-id">{id}</div>

      {/* Title */}
      <div className="card-title">{title}</div>

      {/* Some SVG Icon */}
      <div className="card-svg ">
        <svg width="16" height="16" fill="currentColor">
          <circle cx="8" cy="8" r="8" fill="gray" />
        </svg>
      </div>

      {/* Tags */}
      <div className="card-tags">
        {tag.length > 0 ? (
          tag.map((item, index) => (
            <div key={index} className="card-tag">
              <svg
                className="tag-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
                width="16"
                height="16"
              >
                <circle cx="12" cy="12" r="8" />
              </svg>
              {item}
            </div>
          ))
        ) : (
          <div className="card-no-tag">No Tags</div>
        )}
      </div>

      {/* User Information */}
      <div className="card-user">
        <div className="card-user-initials">{initials}</div>
        <svg
          className="availability-svg"
          xmlns="http://www.w3.org/2000/svg"
          fill={user.available ? 'green' : 'red'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16"
          height="16"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./Table.css";

export const Table = ({ children }) => {
  return (
    <div className="table-overflow-container">
      <table className="table-group">
      	<tbody>
      		<tr>
      			<th>Name</th>
      			<th>PPR</th>
      			<th>Title</th>
      			<th>Crew</th>
      		</tr>  		
        		{children}
        </tbody>
      </table>
    </div>
  );
};

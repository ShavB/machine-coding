import React, { useState } from "react";

function ChipsInput() {
const [inputValue, setInputValue] = useState("");
const [idCount, setIdCouont] = useState(0);
const [chips, setChips] = useState([]);

function handleInputChange(event){
    setInputValue(event.target.value);
}

function handleKeyDown(e){
    if(e.key === "Enter" && inputValue.trim() !== ""){
        const newChip = {
            id : idCount,
            label : inputValue.trim()
        };
        console.log(newChip)
        setChips([...chips, newChip]);
        setIdCouont(idCount + 1);
        setInputValue("")
    }
}

function handleDeleteChip(id){
    setChips(chips.filter((chip) => chip.id !== id))
}

  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text"
        value={inputValue} 
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
    
        <div style={{display: "flex", gap: "2"}}>
            {chips.map((chip) => (
                <div key={chip.id}
                    style={{margin: "4px"}}
                >
                    <span style={{margin: "4px"}}>{chip.label}</span>
                    <span 
                        onClick={() => handleDeleteChip(chip.id)}
                    style={{color: "red", cursor: "pointer"}}>X</span>
                </div>
            ))}
        </div>

    </div>
  );
}

export default ChipsInput;
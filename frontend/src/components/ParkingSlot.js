import React from 'react';

const ParkingSlot = ({ slot, updateSlotStatus }) => {
    return (
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h4>Slot: {slot.slotNumber}</h4>
            <p>Status: {slot.isOccupied ? 'Occupied' : 'Available'}</p>
            {slot.isOccupied ? (
                <p>Vehicle: {slot.vehicleNumber}</p>
            ) : (
                <button onClick={() => updateSlotStatus(slot._id)}>Occupy Slot</button>
            )}
        </div>
    );
};

export default ParkingSlot;

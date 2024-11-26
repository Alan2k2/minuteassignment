import React, { useEffect, useState } from 'react';
import { fetchSlots, updateSlot } from '../api';
import ParkingSlot from './ParkingSlot';

const ParkingList = () => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        fetchSlots().then(({ data }) => setSlots(data));
    }, []);

    const updateSlotStatus = async (id) => {
        const updatedSlot = await updateSlot(id, { isOccupied: true, vehicleNumber: 'ABC123' });
        setSlots(slots.map((slot) => (slot._id === id ? updatedSlot.data : slot)));
    };

    return (
        <div>
            <h1>Parking Slots</h1>
            {slots.map((slot) => (
                <ParkingSlot key={slot._id} slot={slot} updateSlotStatus={updateSlotStatus} />
            ))}
        </div>
    );
};

export default ParkingList;

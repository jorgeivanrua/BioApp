// CLIENT/src/hooks/useEquipment.js

import { useEffect, useState } from 'react';
import { fetchEquipments, addEquipment, deleteEquipment, updateEquipment } from '../../api/EquipmentApi';

const useEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEquipments();
  }, []);

  const loadEquipments = async () => {
    try {
      const data = await fetchEquipments();
      setEquipment(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { equipment, loading, error, addEquipment, deleteEquipment, updateEquipment };
};

export default useEquipment;
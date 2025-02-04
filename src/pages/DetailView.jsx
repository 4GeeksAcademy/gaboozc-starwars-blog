import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useFavorites } from "../Context/FavoriteContext";

const DetailPage = ({ apiEndpoint }) => {
  const { id } = useParams();
  const { addFavorite } = useFavorites();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiEndpoint}/${id}/`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchData();
  }, [apiEndpoint, id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="detail-page">
      <Card className="detail-card">
        <Card.Img
          variant="top"
          src={`https://starwars-visualguide.com/assets/img/${apiEndpoint.split('/').pop()}/${id}.jpg`}
          alt={item.name || item.title}
        />
        <Card.Body>
          <Card.Title>{item.name || item.title}</Card.Title>
          <Card.Text>
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace("_", " ")}:</strong> {Array.isArray(value) ? value.join(", ") : value}
              </p>
            ))}
          </Card.Text>
          <Button onClick={() => addFavorite(item)}>Add to Favorites</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailPage;

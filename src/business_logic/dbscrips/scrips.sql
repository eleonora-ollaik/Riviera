CREATE TABLE booking (
   booking_id serial PRIMARY KEY,
    customer_id INT NOT NULL,
    room_id INT NOT NULL,
    booking_start TIMESTAMPTZ,
    booking_end TIMESTAMPTZ
)


INSERT INTO booking (customer_id, room_id, booking_start, booking_end, booking_creation, booking_update) VALUES (1, 1, '2020-08-12', '2020-08-19', NOW(),NOW())  RETURNING *;
INSERT INTO customers (customer_name) VALUES ('Marina Pupkina')  RETURNING *;
INSERT INTO booking (customer_id, room_id, booking_start,booking_end,booking_creation,booking_update) VALUES (1, 1, 12)  RETURNING *;

SELECT *
FROM booking
INNER JOIN rooms
ON booking.room_id = rooms.room_id
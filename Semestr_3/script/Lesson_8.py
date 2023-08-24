import sqlite3

# connection = sqlite3.connect("new_db.db")
# cursor = connection.cursor()

# # print(connection)  # connection obj
# # print(cursor)  # cursor obj

# # cursor.execute("delete FROM toys where id=2244560;")
# cursor.execute( 
#     """
#     CREATE TABLE if not exists toys (
#         id INTEGER,
#         name TEXT,
#         price REAL
#     )
# """
# )
# # type TEXT


# # Insert Data
# # cursor.execute('''INSERT INTO toys VALUES (2244560, 'Ultimate Ninja Fighter', 24.99, 'action')''')

# # .executemany(): Insert multiple values into table at once
# new_toys = [
#     (1, "Shadow", 32),
#     (2, "Miko", 10),
#     (3, "Ork", 21),
#     (4, "Batman", 21),
#     (5, "Spiderman", 21),
# ]
# # Insert values into the students table
# # executemany(self, __sql: str, __seq_of_parameters: Iterable[_Parameters])
# cursor.executemany("""INSERT INTO toys VALUES (?,?,?)""", new_toys)

# print(cursor.EXECUTE("SELECT * FROM toys").fetchone())
# print(cursor.EXECUTE("SELECT * FROM toys").fetchmany(3))
# print(cursor.EXECUTE("SELECT * FROM toys").fetchall())
# print(cursor.EXECUTE("SELECT name  FROM toys").fetchall())

# for row in cursor.execute("""SELECT * FROM toys WHERE neme = 'Shadow';"""):
#     print("row",row)
    





conn = sqlite3.connect('hotel_booking.db')
cursor = conn.cursor()

cursor.execute("SELECT * FROM booking_summary ")
first_row = cursor.fetchone()
print(first_row)

cursor.execute("SELECT * FROM booking_summary ")
first_10_rows = cursor.fetchall()
print(first_10_rows)

cursor.execute("SELECT * FROM booking_summary WHERE country = 'GRA'")
gra = cursor.fetchall()


cursor.execute("CREATE TABLE IF NOT EXISTS bra_customers AS SELECT * FROM hotel_booking WHERE 0")

cursor.executemany("INSERT INTO bra_customers VALUES (?, ?, ?)",gra  )

cursor.execute("SELECT AVG(lead_time) FROM booking_summary WHERE is_canceled = 0")
average_lead_time_not_canceled = cursor.fetchone()[0]
print("Average lead time for not canceled bookings:", average_lead_time_not_canceled)

cursor.execute("SELECT AVG(lead_time) FROM booking_summary WHERE is_canceled = 1")
average_lead_time_canceled = cursor.fetchone()[0]
print("Average lead time for canceled bookings:", average_lead_time_canceled)

cursor.execute("SELECT SUM(special_requests) FROM booking_summary WHERE is_canceled = 1")
sum_special_requests_canceled = cursor.fetchone()[0]
print("Sum of special requests for canceled bookings:", sum_special_requests_canceled)

cursor.execute("SELECT SUM(special_requests) FROM booking_summary WHERE is_canceled = 0")
sum_special_requests_not_canceled = cursor.fetchone()[0]
print("Sum of special requests for not canceled bookings:", sum_special_requests_not_canceled)

conn.commit()
conn.close()


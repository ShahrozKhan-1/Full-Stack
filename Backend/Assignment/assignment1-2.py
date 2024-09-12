# Question 2

def create_seating_chart():
    rows = int(input("Enter the number of rows in the theater: "))

    # Initialize an empty list to store the seating chart
    seating_chart = []

    # Collect the number of seats for each row
    for row in range(1, rows + 1):
        seats = int(input(f"Enter the number of seats in row {row}: "))
        seating_chart.append(["."] * seats)  # Start with all seats as empty ('.')

    return seating_chart

def print_seating_chart(seating_chart):
    print("\nThe current seating chart:")
    for row_num, row in enumerate(seating_chart, start=1):
        print(f"Row {row_num}: {' '.join(row)}")

def toggle_seat(seating_chart):
    while True:
        row_num = int(input("Enter the row number to toggle seat (0 to stop): "))
        if row_num == 0:
            break

        if 1 <= row_num <= len(seating_chart):
            seat_num = int(input(f"Enter the seat number in row {row_num} to toggle: "))
            if 1 <= seat_num <= len(seating_chart[row_num - 1]):
                current_seat = seating_chart[row_num - 1][seat_num - 1]
                seating_chart[row_num - 1][seat_num - 1] = "X" if current_seat == "." else "."
            else:
                print(f"Invalid seat number. There are only {len(seating_chart[row_num - 1])} seats in row {row_num}.")
        else:
            print(f"Invalid row number. There are only {len(seating_chart)} rows.")
        
        print_seating_chart(seating_chart)


seating_chart = create_seating_chart()
print_seating_chart(seating_chart)

toggle_seat(seating_chart)

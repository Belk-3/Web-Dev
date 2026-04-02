import json
from models import Cake, Drink


import django
def save_data(products):
    try:
        data = [
            {
                "type": "Cake",
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "amount": p.amount,
                "radius": p.radius,
                "is_cream": p.is_cream
            }
            if isinstance(p, Cake)
            else
            {
                "type": "Drink",
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "amount": p.amount,
                "volume_ml": p.volume_ml,
                "is_cold": p.is_cold
            }
            for p in products
        ]

        with open("data.json", "w") as f:
            json.dump(data, f, indent=4)

        print("Data saved successfully")

    except TypeError:
        print("Error while saving data")

    finally:
        print("Save finished")



def load_data():
    products = []

    try:
        with open("data.json", "r") as f:
            data = json.load(f)

        for item in data:
            if item["type"] == "Cake":
                p = Cake(
                    item["id"],
                    item["name"],
                    item["price"],
                    item["amount"],
                    item["radius"],
                    item["is_cream"]
                )

            elif item["type"] == "Drink":
                p = Drink(
                    item["id"],
                    item["name"],
                    item["price"],
                    item["amount"],
                    item["volume_ml"],
                    item["is_cold"]
                )

            else:
                continue

            products.append(p)

        print("Data loaded successfully")

    except FileNotFoundError:
        print("No file found (first запуск)")
    except ValueError:
        print("JSON format error")

    finally:
        print("Load finished")

    return products



if __name__ == "__main__":

    products = load_data()


    if not products:
        print("Creating default products...")

        cake = Cake(1, "Napoleon", 15.0, 3, 10.0, True)
        drink = Drink(2, "Pepsi", 3.0, 5, 500, True)

        products = [cake, drink]

        save_data(products)

    print("\n=== PRODUCTS ===")
    for p in products:
        print(p)
        p.consume()
        print("-----")
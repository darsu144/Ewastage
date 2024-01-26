<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Waste Disposal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 1em;
            text-align: center;
        }

        section {
            max-width: 800px;
            margin: 2em auto;
            padding: 1em;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 0.5em;
        }

        input, button {
            margin-bottom: 1em;
            padding: 0.5em;
        }
    </style>
</head>
<body>

    <header>
        <h1>E-Waste Disposal Service</h1>
    </header>

    <section>
        <form id="ewasteForm">
            <label for="itemName">Item Name:</label>
            <input type="text" id="itemName" required>

            <label for="itemCategory">Category:</label>
            <select id="itemCategory" required>
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="printer">Printer</option>
                
            </select>

            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" required>

            <button type="button" onclick="submitForm()">Submit</button>
        </form>
    </section>

    <script>
        function submitForm() {
            
            var itemName = document.getElementById('itemName').value;
            var itemCategory = document.getElementById('itemCategory').value;
            var quantity = document.getElementById('quantity').value;

           
            console.log("Item Name: " + itemName);
            console.log("Category: " + itemCategory);
            console.log("Quantity: " + quantity);

            
    </script>

</body>
</html>

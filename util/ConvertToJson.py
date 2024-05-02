import pandas as pd

#Change URL if necessary
data_path = './assets/Descubre_PUCP.xlsx'
data = pd.read_excel(data_path)

print(data.head())

# Convertimos datos a JSON
data_json=data.to_json(orient='records')
print(data_json[:500])    



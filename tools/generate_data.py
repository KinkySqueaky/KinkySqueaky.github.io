import json

import pandas as pd

excel_file = pd.ExcelFile("data_sheet.xlsx")
sheet_names = excel_file.sheet_names

out_data = []

for sheet in sheet_names:
    group = {}
    group["title"] = sheet
    group["questions"] = []

    for idx, row in excel_file.parse(
        sheet_name=sheet, na_values=["N/A", "NULL", ""], keep_default_na=False
    ).iterrows():
        question = {}
        question["ID"] = row["ID"]
        question["title"] = row["Title"]
        if row["Top Text"] != "SKIP":
            question["top"] = row["Top Text"]
        if row["Bottom Text"] != "SKIP":
            question["bottom"] = row["Bottom Text"]
        group["questions"].append(question)
    out_data.append(group)

with open("data_out.json", "w") as out_file:
    json.dump(out_data, out_file, indent=2)

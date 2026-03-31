import sys
import PyPDF2

try:
    with open("public/Resume.pdf", "rb") as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open("resume_text.txt", "w", encoding="utf-8") as out:
            out.write(text)
except Exception as e:
    print(f"Error reading PDF: {e}")

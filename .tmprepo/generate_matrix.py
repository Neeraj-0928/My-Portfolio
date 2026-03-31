import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import os

matrix = np.array([[7, 2], [11, 4]])

plt.figure(figsize=(6, 4.5))
ax = sns.heatmap(matrix, annot=True, cmap="Blues", fmt="d", 
            xticklabels=[0, 1], yticklabels=[0, 1])

plt.title("Confusion Matrix", fontsize=14)
plt.ylabel("True", fontsize=12)
plt.xlabel("Predicted", fontsize=12)

out_path = r"c:\Users\Neeraj S\OneDrive\Desktop\MyPortfolio\public\projects\ct-liver\confusion_matrix.png"
plt.tight_layout()
plt.savefig(out_path, dpi=300, transparent=False, bbox_inches="tight")
print(f"Saved to {out_path}")

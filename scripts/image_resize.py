from PIL import Image
import os

# Set the directory containing your high-res images
input_dir = "inputs"

# Set the output directory for resized images
output_dir = "outputs"

# Desired list of widths for resized images
widths = [500, 1000, 1500]

def resize_images(input_dir, output_dir, widths):
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Loop through each file in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            # Open the image file
            with Image.open(os.path.join(input_dir, filename)) as img:
                # Resize image for each specified width while maintaining aspect ratio
                for width in widths:
                    # Calculate new dimensions
                    width_ratio = width / img.width
                    new_width = width
                    new_height = int(img.height * width_ratio)

                    # Resize the image
                    img_resized = img.resize((new_width, new_height))

                    # Convert to WebP format and save the resized image to the output directory
                    output_filename = f"{os.path.splitext(filename)[0]}_{width}px.webp"
                    img_resized.save(os.path.join(output_dir, output_filename), "WEBP")

# Call the function to resize images
resize_images(input_dir, output_dir, widths)
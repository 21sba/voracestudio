import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all <img ... src="assets/images/xyz.svg" ... />
    def replacer(match):
        img_tag = match.group(0)
        src_match = re.search(r'src="([^"]+\.svg)"', img_tag)
        if not src_match:
            return img_tag
        
        svg_path = src_match.group(1)
        classes_match = re.search(r'class="([^"]+)"', img_tag)
        
        try:
            with open(svg_path, 'r') as svg_f:
                svg_content = svg_f.read()
        except:
            return img_tag
        
        # Replace colors with CSS variables (use default fallback so they still render standalone)
        svg_content = re.sub(r'#ee2222', r'var(--color3, #ee2222)', svg_content, flags=re.IGNORECASE)
        svg_content = re.sub(r'#f75555', r'var(--color4, #f75555)', svg_content, flags=re.IGNORECASE)
        svg_content = re.sub(r'#f1eee9', r'var(--color1, #f1eee9)', svg_content, flags=re.IGNORECASE)
        svg_content = re.sub(r'#0f0f0f', r'var(--color2, #0f0f0f)', svg_content, flags=re.IGNORECASE)
        
        # Merge classes
        if classes_match:
            cls = classes_match.group(1)
            if 'class="' in svg_content:
                svg_content = re.sub(r'class="([^"]*)"', r'class="\1 ' + cls + '"', svg_content, 1)
            else:
                svg_content = svg_content.replace('<svg', f'<svg class="{cls}"', 1)
                
        return svg_content

    new_content = re.sub(r'<img[^>]+src="[^"]+\.svg"[^>]*>', replacer, content)
    
    with open(filepath, 'w') as f:
        f.write(new_content)

process_file('components/menu.html')
process_file('components/footer.html')

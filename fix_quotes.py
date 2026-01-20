with open('pages/About.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all curly quotes with straight quotes
content = content.replace('\u2018', "'").replace('\u2019', "'")
content = content.replace('\u201C', '"').replace('\u201D', '"')

with open('pages/About.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('All quotes fixed')

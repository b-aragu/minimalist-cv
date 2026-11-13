#!/usr/bin/env python3
"""
Convert markdown CV files to PDF using WeasyPrint
"""

import os
import subprocess
import sys
from pathlib import Path

# CV files to convert
CV_FILES = [
    "CV_Software_Engineering.md",
    "CV_AI_Applied_AI.md",
    "CV_AI_Trainer_Evaluator.md",
    "CV_Video_Multimodal_Annotation.md",
    "CV_Junior_ML_Engineer.md",
]

BASE_DIR = Path("/home/starnex/Documents/minimalist-cv")

def convert_md_to_html(md_path: Path) -> str:
    """Convert markdown to HTML using pandoc (if available) or Python markdown."""
    try:
        # Try pandoc first
        result = subprocess.run(
            ["pandoc", "-f", "markdown", "-t", "html", str(md_path)],
            capture_output=True, text=True, check=True
        )
        return result.stdout
    except (subprocess.CalledProcessError, FileNotFoundError):
        # Fallback to Python markdown
        import markdown
        with open(md_path, 'r') as f:
            md_content = f.read()
        html = markdown.markdown(md_content, extensions=['tables', 'fenced_code', 'toc'])
        return html

def wrap_html(html_content: str, title: str) -> str:
    """Wrap HTML content with styling for PDF."""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{title}</title>
    <style>
        @page {{
            size: A4;
            margin: 2cm 2.5cm;
            @bottom-center {{
                content: counter(page);
                font-size: 10pt;
                color: #666;
            }}
        }}

        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 100%;
        }}

        h1 {{
            font-size: 24pt;
            font-weight: 700;
            color: #0a0a0a;
            margin-bottom: 4px;
            border-bottom: 2px solid #0a0a0a;
            padding-bottom: 8px;
        }}

        h2 {{
            font-size: 14pt;
            font-weight: 600;
            color: #0a0a0a;
            margin-top: 24px;
            margin-bottom: 12px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        h3 {{
            font-size: 12pt;
            font-weight: 600;
            color: #1a1a1a;
            margin-top: 16px;
            margin-bottom: 8px;
        }}

        p {{
            margin: 8px 0;
            text-align: justify;
        }}

        .subtitle {{
            font-size: 12pt;
            color: #444;
            margin-bottom: 4px;
            font-weight: 400;
        }}

        .contact-line {{
            font-size: 11pt;
            color: #444;
            margin-bottom: 16px;
        }}

        .contact-line a {{
            color: #2563eb;
            text-decoration: none;
        }}

        .contact-line a:hover {{
            text-decoration: underline;
        }}

        hr {{
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 16px 0;
        }}

        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
            font-size: 10pt;
        }}

        th, td {{
            border: 1px solid #e0e0e0;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
        }}

        th {{
            background-color: #f5f5f5;
            font-weight: 600;
            font-size: 9.5pt;
        }}

        tr:nth-child(even) td {{
            background-color: #fafafa;
        }}

        td:first-child {{
            font-weight: 500;
            width: 30%;
        }}

        td:nth-child(2) {{
            width: 10%;
            text-align: center;
        }}

        td:last-child {{
            width: 60%;
            font-size: 9.5pt;
        }}

        ul {{
            margin: 8px 0;
            padding-left: 20px;
        }}

        li {{
            margin: 4px 0;
        }}

        strong {{
            font-weight: 600;
        }}

        em {{
            font-style: italic;
        }}

        code {{
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;
            font-size: 9.5pt;
            background-color: #f0f0f0;
            padding: 2px 4px;
            border-radius: 3px;
        }}

        pre {{
            background-color: #1e1e1e;
            color: #d4d4d4;
            padding: 12px;
            border-radius: 6px;
            overflow-x: auto;
            font-size: 9pt;
            line-height: 1.5;
        }}

        pre code {{
            background: none;
            padding: 0;
            color: inherit;
        }}

        blockquote {{
            border-left: 3px solid #2563eb;
            padding-left: 12px;
            margin: 12px 0;
            color: #555;
            font-style: italic;
        }}

        .section {{
            page-break-inside: avoid;
        }}

        .project-card {{
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            padding: 16px;
            margin: 12px 0;
            page-break-inside: avoid;
        }}

        .project-title {{
            font-weight: 600;
            font-size: 11.5pt;
            margin-bottom: 4px;
        }}

        .project-meta {{
            font-size: 9.5pt;
            color: #666;
            margin-bottom: 8px;
        }}

        .metrics-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            margin: 12px 0;
        }}

        .metric-item {{
            background: #f5f5f5;
            border-radius: 4px;
            padding: 8px 12px;
            text-align: center;
        }}

        .metric-value {{
            font-size: 14pt;
            font-weight: 700;
            color: #0a0a0a;
            font-family: 'SF Mono', monospace;
        }}

        .metric-label {{
            font-size: 8.5pt;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        @media print {{
            .no-print {{
                display: none;
            }}
        }}
    </style>
</head>
<body>
    {html_content}
</body>
</html>"""

def convert_cv_to_pdf(md_filename: str):
    """Convert a single CV markdown file to PDF."""
    md_path = BASE_DIR / md_filename
    pdf_filename = md_filename.replace('.md', '.pdf')
    pdf_path = BASE_DIR / pdf_filename

    print(f"Converting {md_filename} -> {pdf_filename}...")

    # Read and convert markdown to HTML
    html_content = convert_md_to_html(md_path)

    # Extract title from first h1
    import re
    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', html_content)
    title = title_match.group(1) if title_match else "CV"
    # Clean HTML tags from title
    title = re.sub(r'<[^>]+>', '', title)

    # Wrap with styling
    full_html = wrap_html(html_content, title)

    # Write temporary HTML
    html_path = BASE_DIR / f"_temp_{md_filename.replace('.md', '.html')}"
    with open(html_path, 'w') as f:
        f.write(full_html)

    # Convert to PDF using weasyprint
    try:
        from weasyprint import HTML, CSS
        from weasyprint.text.fonts import FontConfiguration

        font_config = FontConfiguration()
        HTML(string=full_html).write_pdf(
            str(pdf_path),
            font_config=font_config,
            presentational_hints=True
        )
        print(f"  ✓ Created {pdf_filename}")

        # Clean up temp HTML
        html_path.unlink(missing_ok=True)
        return True

    except Exception as e:
        print(f"  ✗ Error: {e}")
        html_path.unlink(missing_ok=True)
        return False

def main():
    print("=" * 60)
    print("Converting CV Markdown files to PDF")
    print("=" * 60)

    success_count = 0
    for cv_file in CV_FILES:
        if (BASE_DIR / cv_file).exists():
            if convert_cv_to_pdf(cv_file):
                success_count += 1
        else:
            print(f"✗ {cv_file} not found")

    print("=" * 60)
    print(f"Done: {success_count}/{len(CV_FILES)} PDFs created")
    print("=" * 60)

    # List created PDFs
    for cv_file in CV_FILES:
        pdf_file = cv_file.replace('.md', '.pdf')
        pdf_path = BASE_DIR / pdf_file
        if pdf_path.exists():
            size_kb = pdf_path.stat().st_size / 1024
            print(f"  {pdf_file} ({size_kb:.1f} KB)")

if __name__ == "__main__":
    main()
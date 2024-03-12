from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.formatters import HtmlFormatter


code = """
def hello_world():
    print("Hello, world!")
"""

lexer = get_lexer_by_name("python",stripall=True)
formatter = HtmlFormatter()
highlighter_code = highlight(code,lexer,formatter)
import flask 
from datetime import datetime, date, timedelta
from google.cloud import bigquery
import concurrent.futures


try:
  import googleclouddebugger
  googleclouddebugger.enable()
except ImportError:
  pass

app = flask.Flask(__name__)
app.debug = True
bigquery_client = bigquery.Client()


app.config.update(
    SECRET_KEY = 'x123124asdflsadlf1!!',
    SESSION_COOKIE_NAME = 'finedatalab_flask_session',
    PERMANENT_SESSION_LIFETIME = timedelta(31)
)

@app.after_request
def set_response_headers(r):
    r.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    r.headers['Pragma'] = 'no-cache'
    r.headers['Expires'] = '0'
    return r

@app.route("/")
def main():
    return flask.render_template("index.html", document_title="Analytics Dashboard")

@app.route("/dashboard-social")
def dashboard():
    return flask.render_template("dashboard-social.html", document_title="Social Wall")

@app.route("/layouts")
def layouts():
    return flask.render_template("layouts.html",  document_title="App Layouts")

@app.route("/skins")
def skins():
    return flask.render_template("skins.html", document_title="Prebuilt Skins")

@app.route("/applayout")
def applayout():
    return flask.render_template("applayout.html", document_title="App Settings")

@app.route("/inbox")
def inbox():
    #return render_template("inbox.html", document_title="Outlook")
    return ("템플릿 잃어 버렸네요.!!")

@app.route("/flot")
def flot():
    return flask.render_template("flot.html", document_title="Flot Chart")

@app.route("/morris")
def morris():
    return flask.render_template("morris.html", document_title="Morris Charts")

@app.route("/sparkline-charts")
def sparkline():
    return flask.render_template("sparkline-charts.html", document_title="Sparklines")

@app.route("/easypie-charts")
def easypie():
    return flask.render_template("easypie-charts.html", document_title="EasyPieCharts")

@app.route("/dygraphs")
def dygraphs():
    return flask.render_template("dygraphs.html", document_title="Dygraphs")

@app.route("/chartjs")
def chartjs():
    return flask.render_template("chartjs.html", document_title="Chart.js")

@app.route("/hchartable")
def hchartable():
    return flask.render_template("hchartable.html", document_title="HighchartTable")

@app.route("/table")
def table():
    return flask.render_template("table.html", document_title="Normal Tables")

@app.route("/datatables")
def datatables():
    return flask.render_template("datatables.html", document_title="Data Tables")

@app.route("/jqgrid")
def jqgrid():
    return flask.render_template("jqgrid.html", document_title="Jquery Grid")

@app.route("/form-elements")
def formelements():
    return ("템플릿 잃어 버렸네요.!!")

@app.route("/form-templates")
def formtemplates():
    return flask.render_template("form-templates.html", document_title="Smart Form Layouts")

@app.route("/validation")
def validation():
    return flask.render_template("validation.html", document_title="Smart Form Validation")

@app.route("/bootstrap-forms")
def bootstrapforms():
    return flask.render_template("bootstrap-forms.html", document_title="Bootstrap Form Elements")

@app.route("/bootstrap-validator")
def bootstrapvalidator():
    return flask.render_template("bootstrap-validator.html", document_title="Bootstrap Form Validation")

@app.route("/plugins")
def plugins():
    return flask.render_template("plugins.html", document_title="Form Plugins")

@app.route("/wizard")
def wizard():
    return flask.render_template("wizard.html", document_title="Wizards")

@app.route("/other-editors")
def othereditors():
    return flask.render_template("other-editors.html", document_title="Bootstrap Editors")

@app.route("/dropzone")
def dropzone():
    return flask.render_template("dropzone.html", document_title="Dropzone")

@app.route("/image-editor")
def imageeditor():
    return flask.render_template("image-editor.html", document_title="Image Cropping")

@app.route("/ckeditor")
def ckeditor():
    return flask.render_template("ckeditor.html", document_title="CK Editor")

@app.route("/general-elements")
def generalelements():
    return flask.render_template("general-elements.html", document_title="General Elements")

@app.route("/buttons")
def buttons():
    return flask.render_template("buttons.html", document_title="Buttons")

@app.route("/fa")
def fa():
    return flask.render_template("fa.html", document_title="Font Awesome")

@app.route("/glyph")
def glyph():
    return flask.render_template("glyph.html", document_title="Glyph Icons")

@app.route("/flags")
def flags():
    return flask.render_template("flags.html", document_title="Flags")

@app.route("/grid")
def grid():
    return flask.render_template("grid.html", document_title="Grid")

@app.route("/treeview")
def treeview():
    return flask.render_template("treeview.html", document_title="Tree View")

@app.route("/nestable-list")
def nestablelist():
    return flask.render_template("nestable-list.html", document_title="Nestable Lists")

@app.route("/jqui")
def jqui():
    return flask.render_template("jqui.html", document_title="JQuery UI")

@app.route("/typography")
def typography():
    return flask.render_template("typography.html", document_title="Typography")

@app.route("/widgets")
def widgets():
    return flask.render_template("widgets.html", document_title="Widgets")

@app.route("/calendar")
def calendar():
    return flask.render_template("calendar.html", document_title="Calendar")

@app.route("/gmap-xml")
def gmapxml():
    return flask.render_template("gmap-xml.html", document_title="GMap Skins")

@app.route("/projects")
def projects():
    return flask.render_template("projects.html", document_title="Projects")

@app.route("/blog")
def blog():
    return flask.render_template("blog.html", document_title="Blog")

@app.route("/gallery")
def gallery():
    return flask.render_template("gallery.html", document_title="Gallery")

@app.route("/forum")
def forum():
    return flask.render_template("forum.html", document_title="General View")

@app.route("/forum-topic")
def forumtopic():
    return flask.render_template("forum-topic.html", document_title="Topic View")

@app.route("/forum-post")
def forumpost():
    return flask.render_template("forum-post.html", document_title="Post View")

@app.route("/profile")
def profile():
    return flask.render_template("profile.html", document_title="Profile")

@app.route("/timeline")
def timeline():
    return flask.render_template("timeline.html", document_title="Timeline")

@app.route("/search")
def search():
    return flask.render_template("search.html", document_title="Search Page")

@app.route("/orders")
def orders():
    return flask.render_template("orders.html", document_title="Orders")

@app.route("/products-view")
def productsview():
    return flask.render_template("products-view.html", document_title="Products View")

@app.route("/products-detail")
def productsdetail():
    return flask.render_template("products-detail.html", document_title="Products Detail")

@app.route("/Landing_Page")
def Landing_Page():
    return ("템플릿 잃어 버렸네요.!!")

@app.route("/pricing-table")
def pricingtable():
    return flask.render_template("pricing-table.html", document_title="Pricing Tables")

@app.route("/invoice")
def invoice():
    return flask.render_template("invoice.html", document_title="Invoice")

@app.route("/login")
def login():
    return flask.render_template("login.html", document_title="Login")

@app.route("/register")
def register():
    return flask.render_template("register.html", document_title="Register")

@app.route("/forgotpassword")
def forgotpassword():
    return flask.render_template("forgotpassword.html", document_title="Forgot Password")

@app.route("/lock")
def lock():
    return flask.render_template("lock.html", document_title="Locked Screen")

@app.route("/error404")
def error404():
    return flask.render_template("error404.html", document_title="Error 404")

@app.route("/error500")
def error500():
    return flask.render_template("error500.html", document_title="Error 500")

@app.route("/blank_")
def blank_():
    return flask.render_template("blank_.html", document_title="Blank Page")

@app.route("/BigQuery-demo1")
def BigQuerydemo1():
    query_job = bigquery_client.query(
        """
        SELECT name, SUM(number) as total_people
        FROM `bigquery-public-data.usa_names.usa_1910_2013`
        WHERE state = 'TX'
        GROUP BY name, state
        ORDER BY total_people DESC
        LIMIT 20
    """
    )       

    return flask.redirect(
        flask.url_for(
            "results",
            project_id=query_job.project,
            job_id=query_job.job_id,
            location=query_job.location,
        )
    )

@app.route("/results")
def results():
    project_id = flask.request.args.get("project_id")
    print(project_id)
    job_id = flask.request.args.get("job_id")
    location = flask.request.args.get("location")

    query_job = bigquery_client.get_job(
        job_id,
        project=project_id,
        location=location,
    )

    try:
        # Set a timeout because queries could take longer than one minute.
        query_results = query_job.result(timeout=30)
    except concurrent.futures.TimeoutError:
        return flask.render_template("timeout.html", job_id=query_job.job_id)

    return flask.render_template("BigQuery-demo1-result.html", results=query_results )



if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_python37_app]
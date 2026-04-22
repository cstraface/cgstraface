import emailjs from "emailjs-com";
import { useState } from "react";

const BUDGET_LABELS = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000 – $500,000",
  "$500,000+",
];

const PRODUCT_TYPES = [
  "Web Application",
  "Mobile App",
  "API / Backend",
  "Dashboard / Analytics",
  "E-commerce",
  "AI / ML Feature",
  "Integration / Automation",
  "Other",
];

const PLATFORMS = ["Web (browser)", "iOS", "Android", "Desktop App", "TBD"];

const PRIORITY_DIMS = [
  { key: "priSpeed", label: "Launch speed" },
  { key: "priDesign", label: "Design quality" },
  { key: "priScale", label: "Scalability" },
  { key: "priSecurity", label: "Security / compliance" },
];

const EMPTY_FORM = {
  fullName: "",
  company: "",
  email: "",
  role: "",
  projectName: "",
  summary: "",
  description: "",
  solution: "",
  targetUsers: "",
  marketSize: "",
  businessModel: "",
  competitors: "",
  productTypes: [],
  platforms: [],
  priSpeed: "",
  priDesign: "",
  priScale: "",
  priSecurity: "",
  budget: 3,
  timeline: "",
  techStack: "",
  integrations: "",
  referenceUrl: "",
  successMetric: "",
  anythingElse: "",
};

const PROGRESS_KEYS = [
  "fullName", "email", "projectName", "summary", "description",
  "targetUsers", "role", "company", "solution", "businessModel",
  "marketSize", "timeline", "techStack", "successMetric",
];

const Intake = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const filledCount =
    PROGRESS_KEYS.filter((k) => form[k] && String(form[k]).trim()).length +
    (form.productTypes.length > 0 ? 1 : 0);
  const progress = Math.round((filledCount / (PROGRESS_KEYS.length + 1)) * 100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: false }));
  };

  const toggleCheck = (field, value) => {
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(value)
        ? f[field].filter((v) => v !== value)
        : [...f[field], value],
    }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: false }));
  };

  const setPriority = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
    if (!form.projectName.trim()) e.projectName = true;
    if (!form.summary.trim()) e.summary = true;
    if (!form.description.trim()) e.description = true;
    if (!form.targetUsers.trim()) e.targetUsers = true;
    if (form.productTypes.length === 0) e.productTypes = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector(".intake_err");
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const or = (v) => v || "N/A";
    const intakeData = `
ABOUT YOU
Name: ${form.fullName}
Company: ${or(form.company)}
Email: ${form.email}
Role: ${or(form.role)}

PROJECT OVERVIEW
Project Name: ${form.projectName}
One-Line Summary: ${form.summary}

Problem Being Solved:
${form.description}

Solution Idea:
${or(form.solution)}

USERS & MARKET
Target Users: ${form.targetUsers}
Market Size: ${or(form.marketSize)}
Business Model: ${or(form.businessModel)}
Competitors: ${or(form.competitors)}

PRODUCT TYPE & PLATFORM
Building: ${or(form.productTypes.join(", "))}
Platforms: ${or(form.platforms.join(", "))}

PRIORITIES
Launch Speed: ${or(form.priSpeed)}
Design Quality: ${or(form.priDesign)}
Scalability: ${or(form.priScale)}
Security / Compliance: ${or(form.priSecurity)}
Estimated Budget: ${BUDGET_LABELS[form.budget]}
Timeline: ${or(form.timeline)}

ADDITIONAL CONTEXT
Tech Stack: ${or(form.techStack)}
Integrations: ${or(form.integrations)}
Reference URL: ${or(form.referenceUrl)}
Success Metrics: ${or(form.successMetric)}
Other Notes: ${or(form.anythingElse)}
    `.trim();

    setSending(true);
    setSendError(false);

    emailjs
      .send(
        "service_vpskuf6",
        "template_0gbvgci",
        {
          name: `${form.fullName} — Project Intake`,
          email: form.email,
          message: intakeData,
        },
        "jZFfRXuqTehgwi-0j"
      )
      .then(() => {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(() => {
        setSendError(true);
        setSending(false);
      });
  };

  if (submitted) {
    return (
      <div className="swiss_tm_intake">
        <div className="tm_content">
          <div className="intake_success">
            <div className="intake_success_icon">✓</div>
            <div className="swiss_tm_title">
              <h3>You&rsquo;re all set.</h3>
            </div>
            <p>
              Your project brief has been received. We&rsquo;ll review it carefully and
              follow up within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="swiss_tm_intake">
      <div className="tm_content">
        {/* Header */}
        <div className="swiss_tm_title" style={{ marginBottom: 36 }}>
          <span>- New Project</span>
          <h3>Tell us about your idea.</h3>
        </div>
        <p style={{ marginBottom: 40, maxWidth: 560 }}>
          Fill out the brief below and we&rsquo;ll use it to scope requirements,
          estimate timeline, and lay the right foundation for your project.
        </p>

        {/* Progress bar */}
        <div className="intake_progress_wrap">
          <div className="intake_progress_meta">
            <span className="intake_progress_label">Completion</span>
            <span className="intake_progress_pct">{progress}%</span>
          </div>
          <div className="intake_progress_track">
            <div
              className="intake_progress_fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* 01 — About You */}
          <div className="intake_section_divider">
            <span className="intake_section_num">01</span>
            <h4 className="intake_section_title">About You</h4>
          </div>

          <div className="intake_field">
            <label>
              Full Name <span className="intake_required" />
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Jane Smith"
              autoComplete="name"
              className={errors.fullName ? "intake_err" : ""}
            />
            {errors.fullName && (
              <span className="intake_error_msg">Please enter your name.</span>
            )}
          </div>

          <div className="intake_field">
            <label>Company / Organization</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              autoComplete="organization"
            />
          </div>

          <div className="intake_field">
            <label>
              Email Address <span className="intake_required" />
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@acmecorp.com"
              autoComplete="email"
              className={errors.email ? "intake_err" : ""}
            />
            {errors.email && (
              <span className="intake_error_msg">Please enter a valid email.</span>
            )}
          </div>

          <div className="intake_field">
            <label>Your Role</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="">Select your role</option>
              <option>Founder / CEO</option>
              <option>Product Manager</option>
              <option>CTO / Engineering Lead</option>
              <option>Designer</option>
              <option>Marketing / Growth</option>
              <option>Operations</option>
              <option>Other</option>
            </select>
          </div>

          {/* 02 — Project Overview */}
          <div className="intake_section_divider">
            <span className="intake_section_num">02</span>
            <h4 className="intake_section_title">Project Overview</h4>
          </div>

          <div className="intake_field">
            <label>
              Project / Product Name <span className="intake_required" />
            </label>
            <input
              type="text"
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              placeholder="e.g. TaskFlow, Launchpad, etc."
              className={errors.projectName ? "intake_err" : ""}
            />
            {errors.projectName && (
              <span className="intake_error_msg">Please give the project a name.</span>
            )}
          </div>

          <div className="intake_field">
            <label>
              One-Line Summary <span className="intake_required" />
            </label>
            <input
              type="text"
              name="summary"
              value={form.summary}
              onChange={handleChange}
              placeholder="e.g. A mobile app that helps teams track field service jobs in real time"
              className={errors.summary ? "intake_err" : ""}
            />
            {errors.summary && (
              <span className="intake_error_msg">Please provide a brief summary.</span>
            )}
          </div>

          <div className="intake_field">
            <label>
              Describe the Problem You&rsquo;re Solving <span className="intake_required" />
            </label>
            <span className="intake_hint">
              What&rsquo;s broken or missing today? Who feels this pain most?
            </span>
            <textarea
              name="description"
              value={form.description}
              onChange={(e) => {
                if (e.target.value.length <= 1000) handleChange(e);
              }}
              placeholder="Right now, field technicians have to call dispatch to update job status..."
              className={errors.description ? "intake_err" : ""}
            />
            <div className="intake_char_count">
              {form.description.length} / 1000
            </div>
            {errors.description && (
              <span className="intake_error_msg">Please describe the problem.</span>
            )}
          </div>

          <div className="intake_field">
            <label>What Does Your Solution Look Like?</label>
            <span className="intake_hint">
              High-level product idea — rough ideas are helpful too.
            </span>
            <textarea
              name="solution"
              value={form.solution}
              onChange={handleChange}
              placeholder="A mobile app where techs can tap to update status, add photos..."
            />
          </div>

          {/* 03 — Users & Market */}
          <div className="intake_section_divider">
            <span className="intake_section_num">03</span>
            <h4 className="intake_section_title">Users &amp; Market</h4>
          </div>

          <div className="intake_field">
            <label>
              Who Are the Primary Users? <span className="intake_required" />
            </label>
            <input
              type="text"
              name="targetUsers"
              value={form.targetUsers}
              onChange={handleChange}
              placeholder="e.g. Field service technicians at mid-size HVAC companies"
              className={errors.targetUsers ? "intake_err" : ""}
            />
            {errors.targetUsers && (
              <span className="intake_error_msg">Please describe your target users.</span>
            )}
          </div>

          <div className="intake_field">
            <label>Estimated Market Size</label>
            <select name="marketSize" value={form.marketSize} onChange={handleChange}>
              <option value="">Select range</option>
              <option>Very niche (&lt;1,000 users)</option>
              <option>Small (1K – 10K users)</option>
              <option>Medium (10K – 100K users)</option>
              <option>Large (100K – 1M users)</option>
              <option>Massive (1M+ users)</option>
              <option>Unknown</option>
            </select>
          </div>

          <div className="intake_field">
            <label>Business Model</label>
            <select name="businessModel" value={form.businessModel} onChange={handleChange}>
              <option value="">Select model</option>
              <option>SaaS / Subscription</option>
              <option>One-time purchase</option>
              <option>Marketplace / Commission</option>
              <option>Freemium</option>
              <option>Advertising</option>
              <option>Services / Consulting</option>
              <option>Internal tool (no monetization)</option>
              <option>Not yet determined</option>
            </select>
          </div>

          <div className="intake_field">
            <label>Who Are Your Competitors? (Optional)</label>
            <input
              type="text"
              name="competitors"
              value={form.competitors}
              onChange={handleChange}
              placeholder="e.g. ServiceTitan, Jobber — or 'None that we know of'"
            />
          </div>

          {/* 04 — Product Type & Platform */}
          <div className="intake_section_divider">
            <span className="intake_section_num">04</span>
            <h4 className="intake_section_title">Product Type &amp; Platform</h4>
          </div>

          <div className="intake_field">
            <label>
              What are you building? <span className="intake_required" /> (select all that apply)
            </label>
            <div className={`intake_pill_group${errors.productTypes ? " intake_err_group" : ""}`}>
              {PRODUCT_TYPES.map((pt) => (
                <span
                  key={pt}
                  className={`intake_pill${form.productTypes.includes(pt) ? " selected" : ""}`}
                  onClick={() => toggleCheck("productTypes", pt)}
                >
                  {pt}
                </span>
              ))}
            </div>
            {errors.productTypes && (
              <span className="intake_error_msg">Please select at least one product type.</span>
            )}
          </div>

          <div className="intake_field">
            <label>Platforms Needed (select all that apply)</label>
            <div className="intake_pill_group">
              {PLATFORMS.map((p) => (
                <span
                  key={p}
                  className={`intake_pill${form.platforms.includes(p) ? " selected" : ""}`}
                  onClick={() => toggleCheck("platforms", p)}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* 05 — Priorities & Constraints */}
          <div className="intake_section_divider">
            <span className="intake_section_num">05</span>
            <h4 className="intake_section_title">Priorities &amp; Constraints</h4>
          </div>

          <div className="intake_field">
            <label>Rate the importance of each dimension</label>
            <div className="intake_priority_grid">
              {PRIORITY_DIMS.map(({ key, label }) => (
                <div className="intake_priority_row" key={key}>
                  <span className="intake_priority_label">{label}</span>
                  <div className="intake_priority_options">
                    {["Low", "Medium", "High"].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        className={`intake_priority_btn${form[key] === lvl ? " selected" : ""}`}
                        onClick={() => setPriority(key, lvl)}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="intake_field" style={{ marginTop: 24 }}>
            <label>Estimated Budget Range</label>
            <div className="intake_range_wrap">
              <div className="intake_range_value">{BUDGET_LABELS[form.budget]}</div>
              <input
                type="range"
                className="intake_range"
                min="0"
                max="7"
                step="1"
                value={form.budget}
                onChange={(e) =>
                  setForm((f) => ({ ...f, budget: Number(e.target.value) }))
                }
              />
              <div className="intake_range_labels">
                <span>&lt; $5K</span>
                <span>$500K+</span>
              </div>
            </div>
          </div>

          <div className="intake_field">
            <label>Desired Go-Live Timeline</label>
            <select name="timeline" value={form.timeline} onChange={handleChange}>
              <option value="">Select timeline</option>
              <option>ASAP (1–4 weeks)</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6–12 months</option>
              <option>12+ months</option>
              <option>Flexible / not defined yet</option>
            </select>
          </div>

          {/* 06 — Additional Context */}
          <div className="intake_section_divider">
            <span className="intake_section_num">06</span>
            <h4 className="intake_section_title">Additional Context</h4>
          </div>

          <div className="intake_field">
            <label>Existing Tech Stack / Preferences</label>
            <span className="intake_hint">
              Languages, frameworks, platforms, or cloud providers you already use or prefer.
            </span>
            <input
              type="text"
              name="techStack"
              value={form.techStack}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, AWS, PostgreSQL"
            />
          </div>

          <div className="intake_field">
            <label>Key Integrations Needed</label>
            <span className="intake_hint">
              Third-party tools, APIs, or data sources this product needs to connect to.
            </span>
            <input
              type="text"
              name="integrations"
              value={form.integrations}
              onChange={handleChange}
              placeholder="e.g. Stripe, Salesforce, Google Maps, internal ERP"
            />
          </div>

          <div className="intake_field">
            <label>Reference / Inspiration URL</label>
            <input
              type="url"
              name="referenceUrl"
              value={form.referenceUrl}
              onChange={handleChange}
              placeholder="https://"
            />
          </div>

          <div className="intake_field">
            <label>How Will You Measure Success?</label>
            <span className="intake_hint">
              What does a successful outcome look like 6 months after launch?
            </span>
            <textarea
              name="successMetric"
              value={form.successMetric}
              onChange={handleChange}
              placeholder="e.g. 500 active subscribers, 40% reduction in call volume, <2s load time..."
            />
          </div>

          <div className="intake_field">
            <label>Anything Else We Should Know?</label>
            <textarea
              name="anythingElse"
              value={form.anythingElse}
              onChange={handleChange}
              placeholder="Known blockers, stakeholder constraints, regulatory considerations, previous attempts..."
            />
          </div>

          {/* Submit */}
          <div className="intake_submit_row">
            <p className="intake_submit_note">
              Fields marked <span className="intake_required" /> are required.
              We&rsquo;ll follow up within <strong>1–2 business days</strong>.
            </p>
            <div className="swiss_tm_button">
              <input
                type="submit"
                value={sending ? "Sending…" : "Submit Project Brief →"}
                disabled={sending}
              />
            </div>
          </div>

          {sendError && (
            <p style={{ color: "#f52225", marginTop: 16, fontSize: 14 }}>
              Something went wrong — please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Intake;

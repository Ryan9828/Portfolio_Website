import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui/badge'

const skillGroups: { label: string; color: string; skills: string[] }[] = [
  { label: 'Languages', color: '#4db8ff', skills: ['Python', 'SQL', 'R'] },
  {
    label: 'ML / Modeling',
    color: '#00ff87',
    skills: ['scikit-learn', 'TensorFlow / Keras', 'XGBoost / LightGBM', 'GARCH', 'statsmodels'],
  },
  {
    label: 'Data Engineering',
    color: '#ffe066',
    skills: ['pandas', 'PySpark', 'Docker', 'FastAPI', 'GitHub Actions'],
  },
  { label: 'Cloud / MLOps', color: '#b66dff', skills: ['AWS EC2', 'Streamlit Cloud', 'Vercel', 'Databricks'] },
]

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      heading="Models that ship, not just notebooks that run"
    >
      <p className="text-muted-foreground max-w-2xl leading-relaxed">
        I'm a final-year Data Science &amp; Decisions student at UNSW, currently a Quantitative
        Risk Intern at Toyota Finance Australia, where I extend production XGBoost models and
        build the data pipelines that feed them. Outside of work, I build full systems end to
        end — ingestion, modeling, monitoring, and deployment — because the gap between a good
        model and a useful one is usually everything that happens after the notebook.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold tracking-widest uppercase text-subtle-foreground mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} color={group.color} className="text-xs px-2.5 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

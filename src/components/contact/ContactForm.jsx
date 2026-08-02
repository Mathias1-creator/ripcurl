import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

const PROJECT_TYPES = [
  '3D Landscape Design',
  'Water & Irrigation Planning',
  'Habitat Restoration',
  'Estate Management Consultation',
  'Multiple Services',
  'Not Sure Yet',
];

const PROJECT_SIZES = [
  'Under 1 acre',
  '1–10 acres',
  '10–50 acres',
  '50+ acres',
  'Not Sure',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', location: '',
    projectType: '', projectSize: '', description: '', referral: '',
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-forest" />
        </div>
        <h3 className="font-heading text-3xl text-charcoal mb-4">Thank You</h3>
        <p className="font-body text-charcoal/60 max-w-sm">
          Thank you for reaching out! Karl will personally follow up within 1 business day to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Full Name *</Label>
        <Input
          required
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          className="bg-white border-charcoal/10 font-body h-12"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Phone Number *</Label>
          <Input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="bg-white border-charcoal/10 font-body h-12"
          />
        </div>
        <div>
          <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Email Address *</Label>
          <Input
            required
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="bg-white border-charcoal/10 font-body h-12"
          />
        </div>
      </div>

      <div>
        <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Project Location / City *</Label>
        <Input
          required
          value={form.location}
          onChange={(e) => update('location', e.target.value)}
          className="bg-white border-charcoal/10 font-body h-12"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Project Type</Label>
          <Select onValueChange={(v) => update('projectType', v)}>
            <SelectTrigger className="bg-white border-charcoal/10 font-body h-12">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Estimated Project Size</Label>
          <Select onValueChange={(v) => update('projectSize', v)}>
            <SelectTrigger className="bg-white border-charcoal/10 font-body h-12">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_SIZES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">Tell Us About Your Project *</Label>
        <Textarea
          required
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="Describe your property, vision, and what you're hoping to achieve."
          className="bg-white border-charcoal/10 font-body min-h-[140px]"
        />
      </div>

      <div>
        <Label className="font-body text-xs uppercase tracking-[2px] text-charcoal/60 mb-2 block">How did you hear about us?</Label>
        <Input
          value={form.referral}
          onChange={(e) => update('referral', e.target.value)}
          className="bg-white border-charcoal/10 font-body h-12"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-forest text-cream font-body text-sm tracking-wide hover:bg-forest/90 transition-all duration-300 mt-4"
      >
        Send My Inquiry
      </button>
    </form>
  );
}
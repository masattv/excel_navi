import React from 'react';
import { Template } from '../../data/templates';

interface TemplateSelectorProps {
  templates: Template[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, selectedId, onSelect }) => {
  console.log('TemplateSelector templates:', templates);
  if (!templates || templates.length === 0) {
    return <div className="text-red-600">テンプレートが見つかりません（templates配列が空です）</div>;
  }
  return (
    <div className="mb-6">
      <label className="block mb-4 font-semibold text-lg">テンプレートを選択</label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map(template => (
          <button
            key={template.id}
            className={`p-4 border rounded-lg text-left transition-all ${
              selectedId === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <h3 className="font-semibold mb-2">{template.name}</h3>
            <p className="text-sm text-gray-600">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector; 
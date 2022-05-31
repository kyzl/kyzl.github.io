#include "Hero.h"

Hero::Hero()
{
	this->m_Hp = 500;
	this->m_Atk = 50;

	this->m_Def = 50;
	this->m_HeroName = "张无忌";
	this->weapon = NULL;
}

// 装备武器
void Hero::equipWeapon(Weapon * weapon)
{

	this->weapon = weapon;
	cout << "英雄" << m_HeroName << "装备了" << weapon->m_WeaponName << " 武器" << endl;
}

// 攻击
void Hero::attckMonster(Monster * monster)
{
	int damage = 0;
	int addHp = 0;
	bool isHold = false;
	bool isCrit = false;

	if (this->weapon == NULL) { // 没有武器 伤害没有加成
		damage = this->m_Atk; 
	}
	else {
		damage = this->m_Atk + this->weapon->getBaseDamage();
		// 计算吸血
		addHp = this->weapon->getSukBlood();
		// 计算定身
		isHold = this->weapon->getHold();
		// 是否暴击
		isCrit = this->weapon->getCrit();
	}

	if (isCrit) { // 暴击伤害加成
		damage *= 2;
		cout << "英雄的武器触发了暴击效果，伤害加倍，伤害值" << damage<< endl;
	}
	if (isHold) {

		cout << "英雄的武器触发了定身效果，怪物停止攻击一回合"  << endl;
	}

	if (addHp > 0) {

		cout << "英雄的武器触发了吸血效果，英雄增加的血量" << addHp << endl;
		
	}

	// 调用怪物的血量
	monster->is_Hold = isHold;

	// 计算怪物的真实的伤害
	int trueDamage = (damage - monster->m_Def) > 0 ? damage - monster->m_Def : 1;
	monster->m_Hp -= trueDamage;
	this->m_Hp += addHp;

	cout << "英雄" << this->m_HeroName << "攻击了" << monster->m_MonsterName << ",造成了"
		<< trueDamage << "伤害" << endl;
}
